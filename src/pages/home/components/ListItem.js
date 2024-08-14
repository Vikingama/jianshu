import React, { PureComponent } from "react";
import { ItemWrapper, ItemInfo } from "../style";
import item from "../../../statics/item.jpg";

class ListItem extends PureComponent {
    render() {
        return (
            <ItemWrapper>
                <img className="item-img" src={item} alt="item" />
                <ItemInfo>
                    <h3 className="info-h3">
                        让他任天堂也容易预热热饮让吐尔特根本让
                    </h3>
                    <p className="info-p">
                        房贷和广发等股份的规划和分工古风汉服好贵的挂号费好贵冯好官方会发光的黄蜂队更好的更符合规范发个韩国的凤凰广发华福挂号费很过分很过分发个红电话费观后感很过分的话大姑父的复古风电话发给好的规划发个红凤凰凤凰广发华福过很符合法规和规范化
                    </p>
                </ItemInfo>
            </ItemWrapper>
        );
    }
}

export default ListItem;
