const example = () => {
    const [a, b, ...c] = [1,2,3,4,5,6];
    console.log(c);
};
module.exports = example;