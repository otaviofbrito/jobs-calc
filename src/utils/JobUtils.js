module.exports = {
  remainingDays(job) {
    //calculo de tempo restante
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateMs = createdDate.setDate(dueDay)

    const timeDiffMs = dueDateMs - Date.now()
    //transform ms in days
    const dayMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.ceil(timeDiffMs / dayMs)

    //dias restantes
    return dayDiff
  },
  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}
