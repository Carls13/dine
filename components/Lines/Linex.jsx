import Image from "next/image"

export const Lines = () => {
    return (
        <Image src={'/patterns/pattern-lines.svg'} className="lines" width={160} height={75} alt="Lines" />
    );
};