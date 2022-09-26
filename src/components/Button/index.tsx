import * as C from './styles';

interface IProps {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({label , icon ,onClick}: IProps) => {
    return (
        <C.Container onClick={onClick}> 
            {icon &&
            <C.IconArea>
                <C.Icon src={icon} />
            </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}