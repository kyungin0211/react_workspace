const QuizRadioCom = ({age, onChange}) => {
    return (<>
{age.map( data => 
<span key={data.key}>
    <label htmlFor={data.key}>{data.value}</label>
    <input type="radio" id={data.key} onChange={onChange}
            name={data.name} value={data.value} checked={data.isChecked} />
</span>)}
    </>)
}
export default QuizRadioCom;