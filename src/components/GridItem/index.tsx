import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import B7Svg from '../../svgs/b7.svg';
import { items } from '../../data/items';

interface IProps {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: IProps) => {
    return (
        <C.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {!item.permanentShown && !item.shown &&
                <C.Icon src={B7Svg} alt ="" opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item != null &&
                <C.Icon src={items[item.item].icon} alt ="" />
            }
        </C.Container>
    )
};