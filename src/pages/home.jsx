import { exchangeCodeForAccessToken, exchangeNpssoForCode, getUserTitles, makeUniversalSearch } from "psn-api";
import  "../services/games-api.service";

export const Home = () => {

    const auth = async () => {
        const myNpsso = "2klMXypoxhS5p5Gsg4dwPzShfwFUSI6IIKs0U9ZqIAEb3H6NJZRAe97mMfJqQUDG"
        const accessCode = await exchangeNpssoForCode("2klMXypoxhS5p5Gsg4dwPzShfwFUSI6IIKs0U9ZqIAEb3H6NJZRAe97mMfJqQUDG");

        console.log(accessCode)
    }
    return <main>
        home
    </main>
}