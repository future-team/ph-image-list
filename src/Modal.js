import React from 'react'
import ReactDom from 'react/lib/ReactDOM'
export default class Modal extends React.Component {
    constructor(props, context){
        super(props, context)
        this.portalElement = null
    }
    componentDidMount() {
        var p = this.props.className && document.getElementsByClassName(this.props.className)[0];
        if (!p) {
            var p = document.createElement('div');
            p.id = this.props.className;
            document.body.appendChild(p);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    }
    componentWillUnmount() {
        document.body.removeChild(this.portalElement);
    }
    componentDidUpdate() {
        ReactDom.render(<div {...this.props}>{this.props.children}</div>, this.portalElement);
    }
    render() {
        return null
    }
}