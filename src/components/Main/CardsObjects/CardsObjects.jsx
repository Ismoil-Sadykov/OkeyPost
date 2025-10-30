
export default function CardsObjects({ img, name }) {
    return (
        <div className="flex items-center gap-5">
            <img src={img} alt="" />
            <p className="text-[16px] font-bold">{name}</p>
        </div>
    )
}
