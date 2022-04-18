import React from 'react';

const Blogs = () => {
    return (
        <article className='p-5'>
            <h1 className='text-3xl'>What is context api?</h1>
            <p>Context is using for passing data to the child from their ancestor without passing menually every level of ancestor. We need to create a context with a default value. We also have to export it to receive from another component. All of our child component which could be execute this context should be put in MyCreateContext.provider component and need to pass value. Now it is ready to receive. </p>

            <h1 className='text-3xl'>What is semantic tag?</h1>
            <p>Semantic tag is the meaningful tag Hyper Text Markup Language. When we write a html script, semantic elements describes its meaning to the browser and the developer at a time. P, form, table, article and others semantic tags makes our code more human readable. Semantic web allows data to be shared and reused any communities and applications. Semantic tags are introduced in October 2014 by the upgradation of HTML5.</p>

        </article>
    );
};

export default Blogs;