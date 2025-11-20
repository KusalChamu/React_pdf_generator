export default function ResumeGrid({ personal, project, skill, onRemove, onRemove1, onRemoveSkill }) {
    return (
        <div>
            {personal.map((item) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span>{item.address}</span>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
            ))}

            {project.map((item) => (
                <div key={item.id}>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                    <span>{item.tech}</span>
                    <button onClick={() => onRemove1(item.id)}>Remove</button>
                </div>
            ))}

            {skill.map((item) => (
                <div key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={() => onRemoveSkill(item.id)}>Remove</button>
                    
                </div>
            ))}
        </div>
    );
}
