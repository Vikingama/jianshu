import React from "react";
import Loadable from "react-loadable";
import Loading from "../../Loading";

const LoadableComponent = Loadable({
    // 要异步加载的组件
    loader: () => import("./index"),
    // 加载组件时，显示的遮罩层
    loading: Loading
});

export default () => <LoadableComponent />;
