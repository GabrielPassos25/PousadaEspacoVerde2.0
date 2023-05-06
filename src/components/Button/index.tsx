// Styles
import { Container } from './styles';

// Props
interface ButtonProps {
    type: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onClick: () => void;
    transparent?: boolean;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    fullWidth?: boolean;
}

// Renderer
export function Button({type, text, onClick, transparent=false, size, fullWidth=false}: ButtonProps) {
    return (
        <Container type={type} size={size} transparent={transparent} onClick={onClick} fullWidth={fullWidth}>
            {text}
        </Container>
    );
}