import { useEffect, useState } from 'react';
import { db } from '../../../database/Firebase.js';
import { ref, onValue } from 'firebase/database';

export function usePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsRef = ref(db, 'posts');

        const unsubscribe = onValue(postsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                let postsArray = [];

                if (data) {
                    postsArray = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key],
                    }));
                }
                setPosts(postsArray);
                console.log("Posts carregados com sucesso:", postsArray);
            }
            catch (err) {
                console.error("Erro ao processar os dados:", err);
            }
        }, (dbError) => {
            console.error("Erro ao conectar ao Firebase:", dbError);
        });

        return () => unsubscribe();
    }, []);

    return posts;
}