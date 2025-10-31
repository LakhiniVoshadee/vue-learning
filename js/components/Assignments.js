import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },

  template: `

       <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>

        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

       </section>
    `,
  data() {
    return {
      assignments: [
        { id: 1, title: "Finish Project", completed: false },
        { id: 2, title: "Read chapter 4", completed: false },
        { id: 3, title: "Turn in homework", completed: false },
      ],
    };
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((a) => a.completed);
    },
    inProgressAssignments() {
      return this.assignments.filter((a) => !a.completed);
    },
  },
};

{
  /* <section
        v-show="assignments.filter(a => a.completed).length"
        class="mt-8"
      >
        <h2 class="font-bold mb-2">Completed assignments</h2>

        <ul>
          <li v-for="assignment in assignments.filter(a => a.completed)">
            <label
              >{{ assignment.title }}
              <input type="checkbox" v-model="assignment.completed" />
            </label>
          </li>
        </ul>
      </section> */
}
