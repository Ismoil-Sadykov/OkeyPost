
export default function Review({ img, title, desc }) {
    return (
        <div className="mb-5">
            <img src={img} alt="" className="mb-3" />
            <p className="text-[18px] font-bold mb-3">{title}</p>
            <p className="text-[16px]">{desc}</p>
        </div>
    )
}
