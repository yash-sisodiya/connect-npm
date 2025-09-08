import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import "./otp.css";

const focusInput = (
  refArr: React.MutableRefObject<(HTMLInputElement | null)[]>,
  index: number
) => {
  refArr.current[index]?.focus();
};

const useOtp = (
  otpLength: number,
  autoSubmitDelay: number,
  onComplete: (otp: string) => void
) => {
  const [inputArr, setInputArr] = useState<string[]>(
    new Array(otpLength).fill("")
  );
  const refArr = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const isComplete = inputArr.every((digit) => digit !== "");
    let timer: NodeJS.Timeout;

    if (isComplete) {
      timer = setTimeout(() => {
        onComplete(inputArr.join(""));
        // setInputArr(new Array(otpLength).fill(""));
      }, autoSubmitDelay);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inputArr, onComplete, otpLength, autoSubmitDelay]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (input: string, index: number) => {
    if (input && (input < "0" || input > "9")) return;

    const newArr = [...inputArr];
    newArr[index] = input.slice(-1);
    setInputArr(newArr);

    if (newArr[index] && index < otpLength - 1) {
      focusInput(refArr, index + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const { key, currentTarget } = e;

    switch (key) {
      case "Backspace":
        if (!currentTarget.value && index > 0) {
          focusInput(refArr, index - 1);
        }
        break;
      case "ArrowRight":
        if (index < otpLength - 1) {
          focusInput(refArr, index + 1);
        }
        break;
      case "ArrowLeft":
        if (index > 0) {
          focusInput(refArr, index - 1);
        }
        break;
      default:
        break;
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipBoardData = e.clipboardData.getData("text");

    let numericChars = "";
    for (let i = 0; i < clipBoardData.length; i++) {
      const char = clipBoardData[i];
      if (char >= "0" && char <= "9") {
        numericChars += char;
      }
    }

    const digitsToPaste = numericChars.slice(0, otpLength);
    const newArr = new Array(otpLength).fill("");

    for (let i = 0; i < digitsToPaste.length; i++) {
      newArr[i] = digitsToPaste[i];
    }

    setInputArr(newArr);

    const nextIndex = Math.min(digitsToPaste.length, otpLength - 1);
    focusInput(refArr, nextIndex);
  };

  return {
    inputArr,
    refArr,
    handleOnChange,
    handleKeyDown,
    handlePaste,
  };
};

const OTP_DIGIT_LENGTH = 6;
const AUTO_SUBMIT_DELAY = 500;

interface OtpProps {
  otpLength?: number;
  autoSubmitDelay?: number;
  onComplete?: (otp: string) => void;
}

export default function Otp({
  otpLength = OTP_DIGIT_LENGTH,
  autoSubmitDelay = AUTO_SUBMIT_DELAY,
  onComplete = () => console.log("success"),
}: OtpProps) {
  const { inputArr, refArr, handleOnChange, handleKeyDown, handlePaste } =
    useOtp(otpLength, autoSubmitDelay, onComplete);

  return (
    <div className="krypto-connect-otp-input-container" role="group">
      {inputArr.map((val, index) => {
        return (
          <input
            className="krypto-connect-otp-input-box"
            key={index}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            value={val}
            aria-label={`Digit ${index + 1} of ${otpLength}`}
            autoComplete="one-time-code"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChange(e.target.value, index)
            }
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e)}
          />
        );
      })}
    </div>
  );
}
