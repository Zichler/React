
interface props {
    brand: string;
    color: string;
}

export default function Car(props: props):JSX.Element {

    const {brand, color} = props;
    return (
<div style={{backgroundColor:color, color: "white"}}>
    Brand: {brand} Color: {color}
</div>

)
}