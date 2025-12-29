export default function Work({date, company, position, descriptionArray, css, children}){
    return(
        <div className={`grid grid-rows-[20%_60%_20%] ${css}`}>
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">{date}</h3>
                <h3 className="font-bold">{company} - <span className="font-normal italic text-gray-500">{position}</span></h3>
            </div>
            <div className="mx-3.5">
                {
                    descriptionArray.map((description, index) => (
                        <p key={index} className="my-2">{description}</p>
                    ))
                }
            </div>
        </div>
    )
}