export default function ResumeGrid ({personal,project,skill, onRemove}) {
    return(
        <div>
            {personal.map((item)=>(
                <div 
                key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span>{item.address}</span>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
            ))}
            {project.map((item)=>(
                <div 
                key={item.id}>
                    <span>{item.date}</span>
                    <span>{item.description}</span>
                    <span>{item.tech}</span>
                </div>
            ))}
            {skill.map((item)=>(
                <div
                 key={item.id}
                >
                    <span>{item.text}</span>
                </div>
            ))
            
            
            
            }
        </div>
    )
}