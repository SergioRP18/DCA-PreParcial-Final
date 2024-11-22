let db: any;

const getFirestoreInstance = async () => {
    if(!db){
        const {getFirestore} = await import ('firebase/firestore')
        const {initializeApp} = await import ('firebase/app')

        const firebaseConfig = {
            apiKey: "AIzaSyCli-0p9QYPYeQefupKtB9WwJHTbXYwG2s",
            authDomain: "pre-parcial-final.firebaseapp.com",
            projectId: "pre-parcial-final",
            storageBucket: "pre-parcial-final.firebasestorage.app",
            messagingSenderId: "928593741041",
            appId: "1:928593741041:web:9b53cb7153920b4c791550"
        };

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
};


export const addProduct = async (product: any) => {
    try {
        const db = await getFirestoreInstance();
        const { collection, addDoc } = await import('firebase/firestore');
        const docRef = await addDoc(collection(db!, 'products'), product)
        console.log('Add product success');
    } catch(error) {
        console.error(error);
    }
};

export const getProduct = async () => {
    const db = await getFirestoreInstance();
    const { collection, getDocs } = await import('firebase/firestore');
    const querySnapshot = await getDocs(collection(db!, 'products'));
    const transformed: any[] = [];
    querySnapshot.forEach((doc: any) => {
		const data: any = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});

    return transformed;
};

export default {
    getProduct,
    addProduct,
}