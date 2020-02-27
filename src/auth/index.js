import auth from 'basic-auth';

const terminal = {username: 'terminal', password: '123456'};
const portal = {username: 'portal', password: '123456'};

export const authTerminal = (req, res, next) => {
    let user = auth(req)
    if (!user || !terminal.username == user.name || terminal.password !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"')
        return res.status(401).send()
    }
    return next()
}

export const authPortal = (req, res, next) => {
    let user = auth(req)
    if (!user || !portal.username == user.name || portal.password !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"')
        return res.status(401).send()
    }
    return next()
}