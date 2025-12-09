import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  const constraintsRef = useRef(null);
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          height: "10px",
          width: "100%",
          backgroundColor: "#ff0088",
          transformOrigin: "0%",
          zIndex: 10,
        }}
      />
      <div
        ref={constraintsRef}
        className="text-white text-center font-mono p-20"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <motion.img
          src="https://pngimg.com/d/globe_PNG100087.png"
          alt="globe"
          className="earth"
          draggable={false}
          drag
          dragConstraints={constraintsRef}
          dragElastic={1}
          dragMomentum={true}
          dragTransition={{
            bounceStiffness: 800,
            bounceDamping: 5,
          }}
        />
        <h1 className="text-6xl mb-20">Billie Eilish</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, deleniti voluptas. In qui nihil, nostrum at ipsa ex
          magnam reprehenderit aperiam voluptas non est voluptate iusto
          laudantium sunt quo eaque vel perferendis quas, laboriosam magni
          error! Nam quasi ex doloribus velit eligendi enim dolores tempore
          ipsam laboriosam neque aut, voluptatibus molestias doloremque? Vel ab
          aliquam voluptate consectetur placeat provident fugit quis laudantium
          eveniet repellat natus praesentium, porro vero alias, at est tempora
          iure dolor adipisci et, numquam corrupti illo assumenda? Libero,
          dolorum, provident quis commodi qui optio possimus natus quas est
          similique consequatur sapiente inventore ullam asperiores explicabo
          repudiandae molestias?
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora
          commodi, expedita ipsum sunt alias. Cum, voluptatem? Atque vero quidem
          earum natus ipsa velit, minus odio enim? Molestias harum sequi saepe?
          Perferendis accusamus tenetur placeat, alias temporibus totam deserunt
          quae voluptatibus accusantium, ratione inventore iste iusto
          voluptates! Consectetur laborum eaque perspiciatis quaerat iure
          repudiandae, nam quia at vitae voluptates debitis repellat amet fuga
          tenetur natus nesciunt enim culpa, placeat qui dolore modi, doloribus
          unde magni facere! Et mollitia similique laborum quasi, impedit dolor
          neque, cumque ducimus possimus velit sunt libero natus deserunt
          consequatur molestiae doloribus? Quisquam debitis, error quis ducimus
          ut sed animi deleniti laudantium accusamus assumenda? Excepturi
          corporis blanditiis sit sunt voluptatem ratione, eveniet quae maiores
          delectus eaque corrupti odio quisquam natus porro eligendi, nam
          nostrum officiis tempora minima commodi maxime similique fugit quo
          non? Soluta, neque reprehenderit sunt quam eum facilis repudiandae
          totam alias nam doloribus aut magnam fuga sapiente numquam earum nisi
          consectetur magni iste animi omnis est non nesciunt dolore quidem.
          Culpa, reprehenderit aspernatur accusamus maiores eos adipisci fuga
          aperiam quasi nemo id similique distinctio asperiores quo eius ex
          dicta hic alias sequi nulla! Tenetur tempora voluptates voluptatum
          distinctio, neque natus accusamus facilis incidunt ipsa voluptate.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          odio soluta! Repudiandae facilis ipsam soluta sit ex magnam tenetur?
          Excepturi, eaque tempore placeat unde consequatur laborum aperiam
          voluptatum quia suscipit illo saepe doloremque a facere enim ipsum
          quidem maiores eos eum molestiae praesentium repellendus deserunt
          eveniet! Rem est vero in perferendis quibusdam, necessitatibus
          molestiae consequatur neque nobis ullam saepe repellat repudiandae!
          Sit dolore fugit distinctio beatae perferendis ipsum. Placeat
          assumenda, perspiciatis non incidunt exercitationem porro deleniti.
          Asperiores ducimus reprehenderit recusandae consequuntur, vel ipsum
          quas nam repellendus ea numquam omnis. Recusandae obcaecati, provident
          exercitationem neque dolor, omnis totam hic natus saepe deserunt cum
          rerum doloremque necessitatibus quidem? Quos, praesentium nulla. Quis
          assumenda magnam pariatur alias, veniam sint quo facere fuga aperiam
          expedita eaque accusamus nihil commodi suscipit earum corrupti modi
          eveniet. Eligendi, officia. Fuga laudantium dolorem id facere soluta
          blanditiis aliquam non necessitatibus est, pariatur nobis
          reprehenderit maxime officiis, quis a? Est minus perferendis suscipit
          quod? Odio fuga eaque molestias quaerat? Error, esse nihil non
          similique eos cum recusandae dolor. Molestiae officiis corrupti
          accusantium nam tenetur. Harum, error perferendis libero nobis saepe,
          eaque rerum ducimus debitis asperiores, ut quidem nulla labore
          consequatur unde facilis deleniti doloribus? Qui reprehenderit ex quia
          fuga.
        </p>
      </div>
    </>
  );
};

export default App;
