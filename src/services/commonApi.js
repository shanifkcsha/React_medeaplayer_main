import axios from "axios";

const commonApi = async (reqmethode, apiurl, body) => {
    const reqconfig={
        method: reqmethode,
        url: apiurl,
        data:body,
        headers: { 'Content-Type':'application/json'}
    }
    return await axios(reqconfig).then(res => {
        return res
    }).catch(err => {
        return err
    })
}

export default commonApi