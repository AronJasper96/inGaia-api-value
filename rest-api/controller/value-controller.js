const getValueMeters = async (req, res) => {
    try {
        return res.status(200).json({ "value": 500 });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json('Failed to request');
    }
};


export { getValueMeters };