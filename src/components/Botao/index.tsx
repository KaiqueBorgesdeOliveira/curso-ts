import React from "react";
import style from './Botao.module.scss';

// Define a interface para as props (incluindo children)
interface BotaoProps {
    children?: React.ReactNode; // children é opcional
}

class Botao extends React.Component<BotaoProps> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;