{
    // 2-8: Asynchronous typescript

    // promise

    // simulate
    // const createPromise = () => {
    //     return new Promise((resolve, reject) => {
    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = "something"
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject('failed to load data')
    //         }
    //     });
    // };

    // // calling create promise function
    // const showData = async (): Promise<string> => {
    //     const data: string = await createPromise();
    //     return data;
    //     // console.log(data);
    // };

    // showData();
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    // boolean er khetre 

    //     return new Promise((resolve, reject) => {
    // const createPromise2 = (): Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject) => {
    //         const data1: boolean = true
    //         if (data1) {
    //             resolve(data1)
    //         } else {
    //             reject('failed to load data')
    //         }
    //     });
    // };

    // // calling create promise function
    // const showData2 = async (): Promise<boolean> => {
    //     const data1: boolean = await createPromise2();
    //     return data1;
    //     // console.log(data);
    // };

    // showData2();

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------

    // object pathale

    // const createPromise3 = (): Promise<{ something: string }> => {
    //     return new Promise<{ something: string }>((resolve, reject) => {
    //         const data3: { something: string } = { something: "something" }
    //         if (data3) {
    //             resolve(data3)
    //         } else {
    //             reject('failed to load data')
    //         }
    //     });
    // };

    // // calling create promise function
    // const showData3 = async (): Promise<{ something: string }> => {
    //     const data3: { something: string } = await createPromise3();
    //     return data3;
    //     // console.log(data);
    // };

    // showData3();

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------

    // type use kore 
    type Something = { something: string };

    // simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" }
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        });
    };

    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
        // console.log(data);
    };

    showData();

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const data = await response.json();
        return data;
        console.log(data);
    };

    getTodo();


}