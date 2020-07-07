
const initState = {
    projects:[
        {id: '1', title: 'Mago quântico', content: 'BlaBlaBlaBlaBlaBla'},
        {id: '2', title: 'ceu brilhante', content: 'BlaBlaBlaBlaBlaBla'},
        {id: '3', title: 'brilhante dnv', content: 'BlaBlaBlaBlaBlaBla'}
        
    ]
}


const projectReducer= (state= initState, action) =>{
	switch(action.type) {
		case 'CREATE_PROJECT': 
			console.log("Projeto Criado!!!", action.project)
            return state;
        break;
        case 'CREATE_PROJECT_ERROR': 
            console.log("Falha na criação do projeto :( ", action.err)
            return state
        break;
        default:
            return state;
        break;
	}
    return(state)
}

export default projectReducer;