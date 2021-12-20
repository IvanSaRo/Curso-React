export const heavyProcess = (iterations) => {

    for (let i = 0; i < iterations; i++) {
        console.log('Iterando...')
    }
    return `${iterations} iteraciones realizadas`;
}