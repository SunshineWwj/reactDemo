const DataSource = {
    getComments: () => [
        'comment1', 'comment2', 'comment3'
    ],
    getBlogPost: id => `BlogPost Contents${id}`,
    addChangeListener: () => {
        console.log('addChangeListener');
    },
    removeChangeListener: () => {
        console.log('removeChangeListener');
    },
};
export default DataSource;
