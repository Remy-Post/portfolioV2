export default function Work({date, company, position, descriptionArray, css, children}){
    return(
        <div className={`flex flex-col ${css}`}>
            <div className="flex justify-between relative">
                <h3 className="text-xl font-bold"><span className="hidden group-hover:inline">{date.month}, </span>{date.year}</h3>
                <h3 className="font-bold">{company}<span className="font-normal italic text-gray-500 hidden group-hover:inline"> - {position}</span></h3>
            </div>
            <div className="mx-3.5 max-h-0 opacity-0 overflow-hidden transition-all duration-400 ease-in-out group-hover:max-h-103 group-hover:opacity-100"> {/*Description*/}
                {
                    descriptionArray.map((description, index) => (
                        <p key={index} className="my-2">{description}</p>
                    ))
                }
            </div>
        </div>
    )
}