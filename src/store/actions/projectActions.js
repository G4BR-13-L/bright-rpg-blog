export const createProject = (project) =>{
	return (dispatch, getState, {getFirebase, getFirestore}) => {

		//Chamada assincrona da base de dados
		const firestore = getFirestore();
		firestore.colection('projects').add({
			...project,
			authorFirstName: "Gabriel",
			authorLastName: "Victor",
			authorId: 1234,
			createdAt: new Date()
		}).then(() => {
			dispatch({type: 'CREATE_PROJECT', project });
		}).catch((err) => {
			dispatch({type: 'CREATE_PROJECT_ERROR', err})
		})
		
	}
};