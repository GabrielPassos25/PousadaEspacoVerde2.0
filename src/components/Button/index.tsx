// Styles
import { Container } from './styles';
import { Link } from 'react-scroll';

// Props
interface ButtonProps {
    type: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onClick: () => void;
    transparent?: boolean;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    fullWidth?: boolean;
    redirect?: boolean;
}

// Renderer
export function Button({type, text, onClick, transparent=false, size, fullWidth=false, redirect=false}: ButtonProps) {
    return (
        redirect ?
            <Link to="target-element-id" smooth={true} duration={800}>
                <Container type={type} size={size} transparent={transparent} onClick={onClick} fullWidth={fullWidth}>
                    {text}
                </Container>
            </Link>
        :
        <Container type={type} size={size} transparent={transparent} onClick={onClick} fullWidth={fullWidth}>
                    {text}
        </Container>
    );
}