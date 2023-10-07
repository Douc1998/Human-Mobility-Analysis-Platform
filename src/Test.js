
import React, { useCallback, useEffect, useState, useRef, useLayoutEffect } from "react";
import { Student } from "./Student";
// import Student from "./Student";

function useEvent(handler) {
    const handlerRef = useRef(null);

    // In a real implementation, this would run before layout effects
    useEffect(() => {
        handlerRef.current = handler;
    });

    return useCallback((...args) => {
        // In a real implementation, this would throw if called during render
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
}


export function MyComponent(props) {
    const [count, setCount] = useState(0);

    // const click = useEvent(() => {
    //     setCount(count + 1)
    // })

    const click = useCallback(() => {
        setCount(count => count + 1);
    }, [])

    return (
        <div>
            <div>count is: {count}</div>
            <Student click={click} />
        </div>
    )
}

// export class MyComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//             name: 'dou',
//             words: ['a', 'b'],

//         }
//     }

//     sync = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log('sync1:', this.state.count);
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log('sync2:', this.state.count);
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log('sync3:', this.state.count);
//     }


//     async = () => {
//         setTimeout(() => {
//             this.setState({
//                 count: this.state.count + 1
//             })
//             console.log('async1:', this.state.count);
//             this.setState({
//                 count: this.state.count + 1
//             })
//             console.log('async2:', this.state.count);
//             this.setState({
//                 count: this.state.count + 1
//             })
//             console.log('async3:', this.state.count);
//             this.setState({
//                 count: this.state.count + 1
//             })
//             console.log('async4:', this.state.count);
//         }, 0)
//     }

//     // componentDidUpdate(){
//     //     console.log('parent did update')

//     // }

// componentDidMount(){    
//     // this.setState(state => ({
//     //     count: state.count + 1
//     // }))
//     // console.log('state1:', this.state.count);
//     // this.setState(state => ({
//     //     count: state.count + 1
//     // }))
//     // console.log('state2:', this.state.count);
//     // this.setState(state => ({
//     //     count: state.count + 1
//     // }))
//     // console.log('state3:', this.state.count);
//     setTimeout(() => {
//         this.setState({
//             count: this.state.count + 1,
//         })
//         console.log('state1:', this.state.count);
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log('state2:', this.state.count);
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log('state3:', this.state.count);
//     }, 0)
// }

// render(){
//     console.log('render:', this.state.count);
//     return (
//         <div>
//             <button onClick={this.sync}>sync</button>
//             <button onClick={this.async}>async</button>
//             <div>count is: {this.state.count}</div>
//             <Student words={this.state.words}/>
//         </div>
//     )
// }
// }
