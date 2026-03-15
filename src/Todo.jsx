// export default function Todo (props) {
//     return (
//         <li>Task: {props.task}</li>
//     )
// }

// export default function Todo ({task, isDone}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }



// Conditional Rendering

// conditional rendering - 1 
// export default function Todo ({task, isDone}) {
//     if(isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

// conditional rendering - 2
// export default function Todo ({task, isDone, time=0}) {
//     if(isDone === true) {
//         return <li>Done: {task} Duration={time}</li>
//     }
//     return <li>Pending: {task}</li>
// }

// conditional rendering - 3 (Ternary)
// Ternary => condition ? true : false
// export default function Todo ({task, isDone, time=0}) {
//     return isDone ? <li>Done: {task} Time: {time}</li> : <li>Not Done: {task}</li>
// }

// conditional rendering - 4 (AND - &&)
// export default function Todo ({task, isDone, time=0}) {
//     return isDone && <li>Done Tasks: {task} Time: {time}</li>
// }

// conditional rendering - 5 (OR - ||)
// export default function Todo ({task, isDone, time=0}) {
//     return isDone || <li>Not Done Tasks: {task} Time: {time}</li>
// }

// return null
// export default function Todo ({task, isDone}) {
//     if(isDone === true) {
//         return null;
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

// conditional rendering - 6 (Use Variable)
// export default function Todo ({task, isDone, time}) {
//     const displayTime = time ? time : 100;
//     let listItem;

//     if(isDone === true) {
//         listItem = <li>Done: {task} Time: {displayTime}</li>
//     }
//     else {
//         listItem = <li>Pending: {task}</li>
//     }
//     return listItem;
// }

// conditional rendering - 6 (Use Variable)
export default function Todo ({task, isDone, time}) {
    // const displayTime = time ? time : 100;
    let listItem;

    if(isDone === true) {
        listItem = <li>Done: {task} Time: {time ? 'I am done' : 'Not done yet'}</li>
    }
    else {
        listItem = <li>Pending: {task}</li>
    }
    return listItem;
}

