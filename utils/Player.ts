export class Player {
  private src: string

  private audio: HTMLAudioElement | null
  public isPlaying: boolean = false

  constructor() {
    this.src =
      'https://res.cloudinary.com/johnprops/video/upload/v1609926492/Major_Lazer_DJ_Maphorisa_feat._Nasty_C_Ice_Prince_Patoranking_Jidenna_-_Particula_qoe7vx.mp3'
    if (process.client) {
      this.audio = new Audio(this.src)
    } else {
      this.audio = null
    }
  }

  private changeSrc(url: string) {
    this.src = url
  }

  play(url?: string) {
    if (url) {
      this.changeSrc(url)
      this.audio = new Audio(this.src)
      this.audio.load()
      this.play()
    } else {
      this.audio?.play()
      this.isPlaying = true
    }
  }

  pause() {
    this.audio?.pause()
    this.isPlaying = false
  }

  toggle() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  stop() {
    //
  }
}

const player = new Player()

export default player
