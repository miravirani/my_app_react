function Dynamic() {
    let indexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {indexArray.map((value, index, array) => {
                return (
                    <div key={index}>

                        <p>index number = {index}</p>
                        <p>{value}</p>

                    </div>
                )
            })}
        </>
    )
}
export default Dynamic;