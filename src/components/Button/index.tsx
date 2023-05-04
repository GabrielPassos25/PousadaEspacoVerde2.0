// Styles
import { Container } from './styles';

// Props
interface ButtonProps {
    type: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onClick: () => void;
    transparent?: boolean;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}

// Renderer
export function Button({type, text, onClick, transparent=false, size}: ButtonProps) {
    return (
        <Container type={type} size={size} transparent={transparent} onClick={onClick}>
            {text}
        </Container>
    );
}