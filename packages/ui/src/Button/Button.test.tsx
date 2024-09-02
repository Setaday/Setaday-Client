
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it("버튼 컴포넌트가 정상적으로 렌더링됩니다.", () => {
    render(<Button children="test" className='test' appName='test'/>);

    expect(
        screen.getByRole('button', { name: /test/i }),
      ).toBeInTheDocument();
})
