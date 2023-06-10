import Page from "@/components/pagelayout"
export default function Home() {
  return (
    <Page>
      <div className="page-top-box">
        <p>Koray Genç</p>
        <p>Progammer / 3D Artist</p>
      </div>
      <div className="page-box">
      <header className="page-header-h3">
        About
      <hr className="hr"/>
      </header>
      
      <div>
        Koray is a unexperienced developer based in Turkey with a passion for stuffs he wants.
        <br/>
        <br/>
        He has everything from planning and designing to solving real-life problems with code. 
        <br/>
        <br/>
        I'm sure when he's not with the computer, he's still trying to do something interesting.
      </div>

      <header className="page-header-h3">
        Bio
      <hr className="hr"/>
      </header>

      <div>
        <p>2001 - Born in Turkey, Istanbul</p>
        <p>2021 - Graduate - Associate Computer Programming, Karabük</p>
      </div>
      </div>
    </Page>
  )
}
