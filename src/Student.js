import React, { useEffect } from "react";

export class Student extends React.PureComponent {
    render() {
        return (
            <div>
                <div>{Math.random()}</div>
                <button onClick={this.props.click}>add</button>
            </div>
        )
    }
}


// export default React.memo(Student);

