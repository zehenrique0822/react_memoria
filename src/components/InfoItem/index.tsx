import * as C from './styles';

interface IProps {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value}: IProps) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}