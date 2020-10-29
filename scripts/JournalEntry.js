/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.date}: ${entry.concept}</h3>
            <h4>${entry.mood}</h4>
            ${entry.entry}
        </section>
    `
}