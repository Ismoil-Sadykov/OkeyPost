
export default function CardsProducts({ img, name, title }) {
    return (
        <div className="w-[328px]">
            <img src={img} alt="" width={250}/>
            <p className="text-[20px] font-bold mb-3">{name}</p>
            <p className="text-[16px]">{title}</p>
        </div>
    )
}
