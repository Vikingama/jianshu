import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { DetailWrapper, DetailHeader, DetailContent } from "./style";
import content from "../../statics/content.jpg";

class Detail extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <DetailWrapper>
                <DetailHeader>一个小城姑娘的上海十年</DetailHeader>
                <DetailContent>
                    <img className="content-img" src={ content } alt="content" />
                    <p>
                        走出办公室，已经是晚上十点，白天人声鼎沸的南京西路早已行人稀疏。深夜的热闹属于几百米外的张园和铜仁路酒吧，属于三公里外的新天地和衡山路。
                    </p>
                    <p className="bold">
                        从七点出门挤地铁，到不停歇地工作至晚上十点，人们通过忙碌释放着对这个城市的巨大热情。但内心深处，其实大多数人与这个城市仍有着不可言喻的鸿沟。
                    </p>
                    <p>
                        倏然想起十年前的那个九月，正值秋夏交替之际，湿热的空气中偶尔钻出一阵清凉的风。我含着眼泪依依不舍地向出租车里的爸爸妈妈挥手作别，我以为那只是生命中普通的一天，现在回想起来，从那天起，我的人生被割裂为两半，渺小的我开始了融入繁华上海的漫长征程。
                    </p>
                </DetailContent>
            </DetailWrapper>
        );
    }
}

export default withRouter(Detail);
