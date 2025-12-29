export default function Language({name, image}){
    return (
        <div className="flex items-center gap-2 w-max p-0.50 rounded-2xl">
            { (image != null || image != "") && <img src={image} alt="" className="w-8 h-8 rounded"/> }
            <h3 className="font-bold">{name}</h3>
        </div>
    )
}