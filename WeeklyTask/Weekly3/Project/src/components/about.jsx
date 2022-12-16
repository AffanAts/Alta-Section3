import fox from "../assets/image/1.jpg";
import turtle from "../assets/image/2.jpg";
import lion from "../assets/image/3.jpg";

export default function About() {
  return (
    <div class="content">
      <div class="container my-5">
        <div class="bg-transparent p-5 rounded" style={{ marginTop: "-80px" }}>
          <div class="col-sm-8 py-5 mx-auto">
            <div>
              <div style={{ marginBottom: "50px" }}>
                <center>
                  <h2 class="poppins-font">
                    with your support we can make our planet better
                  </h2>
                  <p>
                    Nature conservation is the moral philosophy and conservation
                    movement focused on protecting species from extinction,
                    maintaining and restoring habitats, enhancing ecosystem
                    services, and protecting biological diversity. A range of
                    values underlie conservation, which can be guided by
                    biocentrism, anthropocentrism, ecocentrism, and sentientism,
                    environmental ideologies that inform ecocultural practices
                    and identities.
                  </p>
                </center>
              </div>

              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="false"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={fox}
                      class="d-block img-fluid rounded"
                      alt="img"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Red Fox</h5>
                      <p>
                        The red fox is the largest of the true foxes and one of
                        the most widely distributed members of the order
                        Carnivora, being present across the entire Northern
                        Hemisphere including most of North America, Europe and
                        Asia, plus parts of North Africa.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src={turtle}
                      class="d-block img-fluid rounded"
                      alt="img"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Turtle</h5>
                      <p>
                        Turtles are an order of reptiles known as Testudines,
                        characterized by a shell developed mainly from their
                        ribs.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src={lion}
                      class="d-block img-fluid rounded"
                      alt="img"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Lion</h5>
                      <p>
                        The lion (Panthera leo) is a large cat of the genus
                        Panthera native to Africa and India. It has a muscular,
                        broad-chested body, short, rounded head, round ears, and
                        a hairy tuft at the end of its tail.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <p>
              <a
                class="btn btn-primary mt-3"
                href="https://www.worldwildlife.org/"
                role="button"
              >
                Learn more about animal
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
