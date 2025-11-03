import EisenhowerCard from "./EisenhowerCard";
import "./ActivityMatrixView.css";

export default function ActivityMatrixView({ items, onAction }) {
    return (
        <div className="matrix-container">
            <div className="eisenhower-grid">
                <EisenhowerCard
                    title="Hacer primero"
                    onAction={onAction}
                    color="red"
                    listItems={items.doFirst || []}
                />
                <EisenhowerCard
                    title="Programar"
                    onAction={onAction}
                    color="blue"
                    listItems={items.schedule || []}
                />
                <EisenhowerCard
                    title="Minimizar"
                    onAction={onAction}
                    color="yellow"
                    listItems={items.delegate || []}
                />
                <EisenhowerCard
                    title="Eliminar"
                    onAction={onAction}
                    color="green"
                    listItems={items.eliminate || []}
                />
            </div>
        </div>
    );
}
