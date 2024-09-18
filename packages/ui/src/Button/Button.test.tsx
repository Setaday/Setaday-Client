import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("버튼이 화면에 정상적으로 렌더링됩니다.", () => {
  render(<Button children="test" />);

  expect(screen.getByText("test")).toBeInTheDocument();
});

it("버튼을 클릭하면 onClick 이벤트 핸들러가 정상적으로 호출됩니다.", () => {
  const handleClick = vi.fn();
  render(<Button children="test" onClick={handleClick} />);

  fireEvent.click(screen.getByText("test"));
  expect(handleClick).toHaveBeenCalled();
});

it("버튼이 비활성화 되어있을 때 클릭하면 onClick 이벤트 핸들러가 호출되지 않습니다.", () => {
  const handleClick = vi.fn();
  render(<Button children="test" onClick={handleClick} disabled />);

  fireEvent.click(screen.getByText("test"));
  expect(handleClick).not.toHaveBeenCalled();
});
