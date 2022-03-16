import Container, { TwoPanel } from "components/Container";
import Main from 'components/Main';

function Legal() {
    return (
        <Main>
            <Container>
                <h3>Legal</h3>
                <br />
                <p>Any application must have have some legal boilerplate to explain how we treat your data. Fortunately for Aeon, this is pretty simple.</p>
                <TwoPanel alignLeft>
                    <div>
                        <h3>Privacy Policy</h3>
                        <p style={{ fontSize: 20 }}><b>We don&apos;t process any of your data.</b>  Really. It's that simple.</p>
                        <p>All your usage of Aeon will not result in any telemetry, data exchange, profile building whatsoever. All your data is stored locally, and is yours to do with as you please.</p>
                        <p>In the process of retrieving your data, Aeon might send requests to services that have your data. As you have already signed away your rights to those services, there&apos; nothing we can do for you here.</p>
                    </div>
                    <div>
                        <h3>Terms of Service</h3>
                        <p style={{ fontSize: 20 }}>You hereby declare to not be a dick.</p>
                        <p>Under this agreement, you are bound to use Aeon to further your personal rights, and are required to be generally cool person.</p>
                        <p>Oh and before I forget, of course this software comes without warranty of any kind. I&apos;d put it in caps to hammer the point home, but that wouldn&apos;t be friendly would it? If care for the fancy words, we&apos;ll gladly refer you to <a href="https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt" target="_blank">our license agreement.</a></p>
                    </div>
                </TwoPanel>
            </Container>
        </Main>
    )
}   

export default Legal;