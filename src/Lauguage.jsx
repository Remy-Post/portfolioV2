export default function Language({name, image}){
    return (
        <div className="flex items-center gap-2 w-max">
            <img src={image} alt="" className="w-8 h-8"/>
            <h3 className="font-bold">{name}</h3>
        </div>
    )
}