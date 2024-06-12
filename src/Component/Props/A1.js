import A2 from '../A2';

function A1(props){

   console.log(props);
    return(
        <>
            <h1>This is A1 component</h1>
            NAME = {props.comName}; 
            AVG = {props.res}
            <A2 data = {props}/> 
        </>
    );
}
export default A1;
